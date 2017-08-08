import { StringFilter } from 'clarity-angular';

export class IDFilter implements StringFilter<any> {
	accepts(component: any, search: string): boolean {
		return component.id.toLowerCase().indexOf(search) >= 0;
	}
}

export class NameFilter implements StringFilter<any> {
	accepts(component: any, search: string): boolean {
		return component.type.toLowerCase().indexOf(search) >= 0;
	}
}

export class LocationFilter implements StringFilter<any> {
	accepts(component: any, search: string): boolean {
		return component.location.toLowerCase().indexOf(search) >= 0;
	}
}

export class GroupFilter implements StringFilter<any> {
	accepts(component: any, search: string): boolean {
		return component.group.toLowerCase().indexOf(search) >= 0;
	}
}

export class StatusFilter implements StringFilter<any> {
	accepts(component: any, search: string): boolean {
		return component.status.toLowerCase().indexOf(search) >= 0;
	}
}
