import remove from 'lodash/remove'
import { Observable } from 'rxjs'
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class PhoneService {
  datacallingCode
  constructor() {
    this.getCallingCode()
  }

  getCallingCode() {
    fetch(`https://restcountries.eu/rest/v2/all?fields=name;nativeName;callingCodes;population;currencies;languages;flag`)
      .then(async respones => {
        const result = await respones.json()
        for (const { callingCodes } of result) {
          for (let index = 0; index < callingCodes.length; ++index) callingCodes[index] = +(callingCodes[index] as any).replace(/\s+/g, ``)
          remove(callingCodes, (callingCode) => !callingCode)
        }
        remove(result, ({ callingCodes, population }) => !callingCodes.length || !population)
        for (const { currencies } of result) remove(currencies, ({ code, name: currencyName }) => !code || !currencyName || code === `(none)`)
        result.sort((a, b) => b.population - a.population)
        this.datacallingCode = result
      })
  }
}
