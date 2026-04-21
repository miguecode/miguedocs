---
title: "Servicios any o con Providers. UseClass, Value, Factory, Existing"
---

> Propiedad providedIn para los Servicios

providedIn: 'root' -> Única instancia en TODA la aplicación (Singleton).
providedIn: 'any' -> Se va a inyectar en el módulo más cercano al que lo solicite por primera vez.


> providedIn en "any"

- Lo que hace el "any" es que, en lugar de crear una única instancia global (como con "root"), crea una instancia diferente por cada "zona de inyección" donde sea solicitado por primera vez. Esto significa que si dos módulos distintos piden el servicio, cada uno tendrá su propia instancia.

- Sirve por si queremos aislar el estado de un servicio entre distintas partes de la app (por ejemplo, módulos perezosos). Es útil para cuando no necesitamos compartir una información en toda la aplicación, sino en unas en específico.

	@Injectable({
		providedIn: 'any';
	})
	export class LoginService {
		log(message: string) {
			console.log('log': , message);
		}
	}


> Usar la propidad "providers" en vez de providedIn

- La propiedad array providers se usa para cuando el servicio va a ser usado únicamente por un componente y por sus hijos. Es un Singleton local al árbol de ese componente.

- Es ideal si el servicio tiene un estado interno que no queremos que se mezcle con otros componentes (por ejemplo, un contador local o una configuración personalizada por sección). Además, evitamos contaminar el scope global.

- Entonces, si en vez de usar la propiedad providedIn para importar un servicio usamos la propiedad array "providers", podemos hacer uso de useClass, useValue, useFactory o useExisting.

- Primero, veamos un ejemplo básico de uso de providers:

	@Component({
		standalone: true,
		selector: 'app-local',
		template: `<p>Contenido del componente local</p>`,
		providers: [LocalService],
	})
	export class LocalComponent {
		localService = inject(LocalService);
	}

- De esta forma, el servicio LocalService va a estar disponible solo para el componente LocalComponent y para todos sus hijos, creando una instancia única y aislada del resto.


> useClass en "providers"

- El useClass permite reemplazar uan clase por otra en el momento de la inyección. Es ideal para testing, mocking, o para cambiar implementaciones de manera dinámica sin cambiar el código consumidor.

- Primero, vamos a crear dos servicios distintos MockData y RealData:

	@Injectable()
	export class MockDataService {
		getData() { return 'mock data'; }
	}
	@Injectable()
	export class RealDataService {
		getData() { return 'real data'; }
	}
	
- Ahora, vamos a aplicar esto en un módulo, así:

	@NgModule({
		providers: [
			{ provide: MockDataService, useClass: RealDataService }
		]
	})

- Como vemos, hicimos uso del "useClass" en la propiedad "providers".  

- Y obviamente, si se puede aplicar en un módulo, también se puede aplicar en un componente standalone:
	
	@Component({
		standalone: true,
		selector: 'app-root',
		template: `<p>{{ data }}</p>`,
		providers: [
			{ provide: MockDataService, useClass: RealDataService };
		]	
	})
	export class AppComponent {
		data: string;
		dataService = inject(MockDataService);
		data = this.dataService.getData();
	}

- Lo que hicimos acá es que, si inyectamos el MockDataService, se va a hacer uso de la clase RealDataService. Así que lo que va a parar a "data" es el string "real data".



> useValue

- useValue lo que hace es inyectar un objeto literal, constante o valor definido, de forma manual. Sirve para configurar parámetros globales como URLs de APIs, tokens de configuración, flags de entorno, etc. Veamos:

	const CONFIG = { apiUrl: 'https://api.example.com' }
	
	@Component ({
		standalone: true,
		selector: 'app-config',
		template: ` <p>{{ API: config.apiUrl }}</p>`
		providers: [{
			provide: "CONFIG", useValue: { apiUrl: 'https://rickandmorty.com' }
		}]
	})
	export class ConfigComponent { ... }

- De esta forma, CONFIG va a ser un objeto que viene de afuera de la declaración del componente, pero le pisa el valor usando useValue. En este caso, la api.example va a ser pisada por rickandmorty, pero usando el mismo objeto CONFIG.


> useFactory

- useFactory define una función que devuelve una instancia personalizada del servicio, permitiendonos usar lógica para poder construirla. Sirve para inicializar un servicio en base a condiciones, como hostname, idioma, o datos del entorno.

- Primero, vamos a crear un servicio, y la función que va a hacer de fábrica:

	@Injectable
	export class DataService { 
		apiUrl: string = ""; 
	}
	
	export function dataServiceFactory(hostname: string) {
		const apiUrl = hostname === "localhost"
		? "https://localhost:3000"
		: "https://rickandmorty.com"
		
		return new DataService(apiUrl);
	}


- Para usar la fábrica, hacemos:

	@Component({
			standalone: true,
			selector: 'app-root',
			template: `<p>{{ data }}</p>`,
			providers: [
				{ provide: DataService, useFactory: dataServiceFactory };
			]	
		})
		export class AppComponent {
			data: string;
			dataService = inject(DataService);
			data = this.dataService.apiUrl;
		}


> useExisting

- useExisting hace que un token apunte al mismo objeto que otro servicio ya existente. Sirve para que dos servicios compartan exactamente la misma instancia (alias).

	@Injectable()
	export class BaseService {
		getData() {
			return 'base data';
		}
	}
	
	@Injectable()
	export class DerivecService {
		baseService = inject(BaseService);
		
		getData() {
			return this.baseService.getData() + ' - derived';
		}
	}
	
	@Component ({
		standalone: true,
		selector: 'app-root',
		template: ` <p>{{ data }}</p>`
		providers: [
			{ provide: DerivedService, useExsiting: BaseService }
		]
	})
	export class AppComponent {
		derivedService = inject(DerivedService)
		data = this.derivedService.getData();
	}


> Resumen visual	
	
Objetivo										Qué usar
___________________________________________________________________________________________________
Compartir globalmente (Singleton)					providedIn: 'root'
Compartir por módulo/área funcional				providedIn: 'any'
Compartir entre un componente y sus hijos			providers: [Servicio] en el componente
Usar lógica de inicialización						useFactory
Cambiar comportamiento según entorno/test		useClass o useValue
Reutilizar una misma instancia con otro nombre		useExisting