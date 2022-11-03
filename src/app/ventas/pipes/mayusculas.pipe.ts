import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
name: 'mayusculas'
})

export class MayusculasPipe implements PipeTransform {
    transform(cValor: string,lMostrarMayusculas: boolean = true):string {
        return lMostrarMayusculas ? cValor.toUpperCase() : cValor.toLowerCase();
    }

}