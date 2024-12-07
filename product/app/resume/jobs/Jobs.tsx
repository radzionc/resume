import { JobExperience } from '@lib/resume-ui/components/JobExperience'
import { ResumeSection } from '@lib/resume-ui/components/ResumeSection'
import { shyTextButton, ShyTextButton } from '@lib/ui/buttons/ShyTextButton'
import { VStack } from '@lib/ui/css/stack'
import { ExternalLink } from '@lib/ui/navigation/Link/ExternalLink'
import { IogIcon } from './IogIcon'
import { TflIcon } from './TflIcon'
import { ZerionIcon } from './ZerionIcon'

import { firstJobStartedAt } from '@product/config'
import { KreoIcon } from './KreoIcon'
import { KontistIcon } from './KontistIcon'
import styled from 'styled-components'

const ResumeLink = styled(ExternalLink)`
  ${shyTextButton};
`

export const Jobs = () => (
  <>
    <ResumeSection title={<>Web3</>}>
      <JobExperience
        position="Front-end Engineer"
        company="Terraform Labs"
        startedAt={new Date(2022, 2)}
        finishedAt={new Date(2024, 7)}
        companyIcon={<TflIcon />}
        responsibilities={[
          <>
            Managed the end-to-end development of all front-end and server-side
            components within a monorepo for the{' '}
            <ResumeLink to="https://dao.enterprise.money/">
              Enterprise
            </ResumeLink>{' '}
            DAO management protocol
          </>,
          'Making front-end for two experimental NFT protocols for decentralized story creation',
          'Building new features for the Anchor protocol',
        ]}
      />
      <VStack gap={20}>
        <JobExperience
          position="Front-end Engineer"
          company="IOG"
          finishedAt={new Date(2022, 1)}
          startedAt={new Date(2021, 8)}
          companyIcon={<IogIcon />}
          responsibilities={[
            <>
              Developing front-end for a Cardano light wallet -{' '}
              <ExternalLink to="https://www.lace.io/">
                <ShyTextButton>Lace</ShyTextButton>
              </ExternalLink>
            </>,
          ]}
        />
        <JobExperience
          position="Front-end Engineer"
          company="Zerion"
          finishedAt={new Date(2021, 7)}
          startedAt={new Date(2020, 9)}
          companyIcon={<ZerionIcon />}
          responsibilities={[
            'Implementing interfaces for wallets management',
            <>Improving UX of the trading experience</>,
            <>
              Adding internalization to the{' '}
              <ExternalLink to="https://app.zerion.io">Zerion app</ExternalLink>
            </>,
          ]}
        />
      </VStack>
    </ResumeSection>
    <ResumeSection title={'Full-Stack'}>
      <JobExperience
        companyIcon={<KontistIcon />}
        position="Senior Software Developer"
        company="Kontist"
        startedAt={new Date(2019, 6)}
        finishedAt={new Date(2020, 8)}
        responsibilities={[
          'Technical planning and code reviews',
          'Adding features to the native app',
          'Developing a new web app',
          'Improving sign up conversion',
        ]}
        technologies={['React Native', 'React', 'NodeJS', 'PostgreSQL']}
      />
      <JobExperience
        position="Software Developer"
        company="KREO"
        companyIcon={<KreoIcon />}
        startedAt={firstJobStartedAt}
        finishedAt={new Date(2019, 5)}
        responsibilities={[
          'Implementing complex interfaces',
          'Frontend architecture',
          'Managing infrastructure',
          'Developing microservices',
        ]}
        technologies={[
          'React',
          'Redux',
          'Terraform',
          'AWS',
          'NodeJS',
          'DynamoDB',
        ]}
      />
    </ResumeSection>
  </>
)
