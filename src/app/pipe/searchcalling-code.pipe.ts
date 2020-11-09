import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'searchcallingCode'
})
export class SearchcallingCodePipe implements PipeTransform {

  transform(callingCode, search: string) {
    const arr = []
    if (!callingCode || !search) {
      return callingCode
    }
    if (search[0] === "+" && search.length === 1) {
      return callingCode
    }
    callingCode.filter(call => {
      if (call.callingCodes[0].toString().indexOf(parseInt(search)) !== -1) { arr.push(call) }
    })
    return arr
  }

}
