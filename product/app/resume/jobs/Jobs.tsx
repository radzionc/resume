import { JobExperience } from '@lib/resume-ui/components/JobExperience'
import { ProductLink } from '@lib/resume-ui/components/ProductLink'
import { ResumeSection } from '@lib/resume-ui/components/ResumeSection'
import { Tech } from '@lib/resume-ui/components/Tech'
import { firstJobStartedAt } from '@product/config'

import { IogIcon } from './IogIcon'
import { KontistIcon } from './KontistIcon'
import { KreoIcon } from './KreoIcon'
import { TflIcon } from './TflIcon'
import { VultisigIcon } from './VultisigIcon'
import { ZerionIcon } from './ZerionIcon'

export const Jobs = () => (
  <>
    <ResumeSection title={<>Web3 Wallets</>}>
      <JobExperience
        position="Senior Front-end Engineer"
        company="Vultisig"
        startedAt={new Date(2024, 7)}
        companyIcon={<VultisigIcon />}
        responsibilities={[
          <>
            Developing a cross-chain desktop wallet for{' '}
            <ProductLink to="https://vultisig.com/">Vultisig</ProductLink> using{' '}
            <Tech>React</Tech>, <Tech>TypeScript</Tech>, and <Tech>Wails</Tech>.
          </>,
          <>
            Implementing MPC functionality for enhanced security across multiple
            devices.
          </>,
        ]}
      />
      <JobExperience
        position="Front-end Engineer"
        company="IOG"
        finishedAt={new Date(2022, 1)}
        startedAt={new Date(2021, 8)}
        companyIcon={<IogIcon />}
        responsibilities={[
          <>
            Built the NFT gallery and transaction history for{' '}
            <ProductLink to="https://www.lace.io/">Lace</ProductLink> using{' '}
            <Tech>React</Tech> and <Tech>TypeScript</Tech>.
          </>,
          <>Enhanced wallet functionalities and general UX/UI improvements.</>,
        ]}
      />
    </ResumeSection>
    <ResumeSection title={<>Web3</>}>
      <JobExperience
        position="Front-end Engineer"
        company="Terraform Labs"
        startedAt={new Date(2022, 2)}
        finishedAt={new Date(2024, 6)}
        companyIcon={<TflIcon />}
        responsibilities={[
          <>
            Developed features for Anchor Protocol using <Tech>React</Tech> and{' '}
            <Tech>TypeScript</Tech>.
          </>,
          <>
            Built front-ends for two NFT protocols on Terra with{' '}
            <Tech>Next.js</Tech>.
          </>,
          <>
            Led development of Enterprise Protocol, a DAO management tool
            supporting multiple Cosmos chains.
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
            Improved wallet management and token exchange for{' '}
            <ProductLink to="https://app.zerion.io/">Zerion</ProductLink>.
          </>,
          <>
            Integrated staking features and internationalization support with{' '}
            <Tech>React</Tech>.
          </>,
          <>
            Enhanced DeFi functionality and user experience with{' '}
            <Tech>TypeScript</Tech>.
          </>,
        ]}
      />
    </ResumeSection>
    <ResumeSection title="Web2">
      <JobExperience
        companyIcon={<KontistIcon />}
        position="Senior Software Developer"
        company="Kontist"
        startedAt={new Date(2019, 6)}
        finishedAt={new Date(2020, 8)}
        responsibilities={[
          <>
            Improved onboarding and account creation using <Tech>React</Tech>{' '}
            and <Tech>React Native</Tech>.
          </>,
          <>
            Developed a web app for the product with <Tech>TypeScript</Tech>.
          </>,
          <>
            Built and maintained back-end features using <Tech>Node.js</Tech>{' '}
            and PostgreSQL.
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
            Led development of a web app for construction software with{' '}
            <Tech>React</Tech>.
          </>,
          <>Implemented a floor plan editor and site management tools.</>,
          <>
            Managed infrastructure with <Tech>AWS</Tech> and{' '}
            <Tech>Terraform</Tech>.
          </>,
        ]}
      />
    </ResumeSection>
  </>
)
