import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'searchItem'
})
export class SearchItemPipe implements PipeTransform {

  transform(data, search: string) {
    const arr = []
    if (!data || !search) {
      return data
    }
    data.filter(d => {
      if (d.name.toLowerCase().indexOf(search.toLowerCase()) !== -1) { arr.push(d) }
    })
    return arr
  }

}
