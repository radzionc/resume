import { CountryCode, countryCodes, countryNameRecord } from '@lib/countries'
import { InputProps } from '../props'
import CountryFlag from '../countries/flags/CountryFlag'
import { IconWrapper } from '../icons/IconWrapper'
import styled from 'styled-components'
import { CountryFlagFrame } from '../countries/CountryFlagFrame'
import { FixedOptionsInput } from './dropdown/FixedOptionsInput'
import { DropdownOptionContent } from './dropdown/DropdownOptionContent'

interface CountryInputProps extends InputProps<CountryCode | null> {
  label?: React.ReactNode
}

const FlagWrapper = styled(IconWrapper)`
  border-radius: 2px;
`

export const CountryInput = ({ value, onChange, label }: CountryInputProps) => {
  return (
    <FixedOptionsInput
      value={value}
      label={label}
      onChange={onChange}
      placeholder="Search for a country"
      options={countryCodes}
      getOptionSearchStrings={(code) => [countryNameRecord[code]]}
      getOptionName={(code) => countryNameRecord[code]}
      getOptionKey={(code) => code}
      renderOptionIdentifier={(code) => (
        <FlagWrapper>
          <CountryFlag code={code} />
        </FlagWrapper>
      )}
      optionIdentifierPlaceholder={
        <FlagWrapper>
          <CountryFlagFrame />
        </FlagWrapper>
      }
      renderOption={(code) => (
        <DropdownOptionContent
          identifier={
            <FlagWrapper>
              <CountryFlag code={code} />
            </FlagWrapper>
          }
          name={countryNameRecord[code]}
        />
      )}
    />
  )
}
