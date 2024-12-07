import { JobExperience } from '@lib/resume-ui/components/JobExperience'
import { ResumeSection } from '@lib/resume-ui/components/ResumeSection'
import { VStack } from '@lib/ui/css/stack'
import { IogIcon } from './IogIcon'
import { TflIcon } from './TflIcon'
import { ZerionIcon } from './ZerionIcon'

import { firstJobStartedAt } from '@product/config'
import { KreoIcon } from './KreoIcon'
import { KontistIcon } from './KontistIcon'
import { ProductLink } from '@lib/resume-ui/components/ProductLink'
import { Tech } from '@lib/resume-ui/components/Tech'

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
            Developed new features for{' '}
            <ProductLink to="https://app.anchorprotocol.com/">
              Anchor Protocol
            </ProductLink>{' '}
            using <Tech>React</Tech> and <Tech>TypeScript</Tech>.
          </>,
          <>
            Built front-end for two NFT protocols on Terra with{' '}
            <Tech>React</Tech> and <Tech>Next.js</Tech>.
          </>,
          <>
            Led development of{' '}
            <ProductLink to="https://enterprise.anchorprotocol.com/">
              Enterprise Protocol
            </ProductLink>
            , a DAO management tool with cross-chain support.
          </>,
          <>
            Maintained a TypeScript monorepo with <Tech>Node.js</Tech>,{' '}
            <Tech>DynamoDB</Tech>, and <Tech>Terraform</Tech>.
          </>,
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
              Worked on{' '}
              <ProductLink to="https://www.lace.io/">Lace Wallet</ProductLink>,
              developing features for NFT gallery and transaction history.
            </>,
            <>
              Improved UI/UX for balances and general product experience using{' '}
              <Tech>React</Tech> and <Tech>TypeScript</Tech>.
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
            <>
              Enhanced wallet management and integrations for the{' '}
              <ProductLink to="https://app.zerion.io/">
                Zerion web app
              </ProductLink>
              .
            </>,
            <>
              Implemented token exchange, staking features, and
              internationalization support with <Tech>React</Tech> and{' '}
              <Tech>TypeScript</Tech>.
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
          <>
            Improved onboarding and account creation workflows using{' '}
            <Tech>React</Tech> and <Tech>Node.js</Tech>.
          </>,
          <>
            Developed a web app for the product with <Tech>React</Tech>,{' '}
            <Tech>TypeScript</Tech>, and <Tech>React Native</Tech>.
          </>,
          <>
            Built and maintained APIs with <Tech>PostgreSQL</Tech> and{' '}
            <Tech>Node.js</Tech>.
          </>,
        ]}
      />
      <JobExperience
        position="Software Developer"
        company="KREO"
        companyIcon={<KreoIcon />}
        startedAt={firstJobStartedAt}
        finishedAt={new Date(2019, 5)}
        responsibilities={[
          <>
            Developed the web app for{' '}
            <ProductLink to="https://www.kreo.net/">KREO</ProductLink> using{' '}
            <Tech>React</Tech> and <Tech>TypeScript</Tech>.
          </>,
          <>Built a construction site management tool and floor plan editor.</>,
          <>
            Managed infrastructure with <Tech>Terraform</Tech> and{' '}
            <Tech>AWS</Tech>.
          </>,
        ]}
      />
    </ResumeSection>
  </>
)
