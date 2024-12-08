import { ResumeFooterLink } from '@lib/resume-ui/components/ResumeFooterLink'
import { HStack } from '@lib/ui/css/stack'
import { GitHubIcon } from '@lib/ui/icons/GitHubIcon'
import { LinkedinIcon } from '@lib/ui/icons/LinkedinIcon'
import { MailIcon } from '@lib/ui/icons/MailIcon'
import { TelegramIcon } from '@lib/ui/icons/TelegramIcon'
import { XIcon } from '@lib/ui/icons/XIcon'
import {
  email,
  xHandle,
  linkedInHandle,
  githubHandle,
  telegramHandle,
} from '@product/config'

export const Contacts = () => (
  <HStack
    fullWidth
    justifyContent="space-between"
    alignItems="center"
    wrap="wrap"
    gap={16}
  >
    <ResumeFooterLink
      icon={<MailIcon />}
      name={email}
      url={`mailto:${email}`}
    />
    <ResumeFooterLink
      icon={<XIcon />}
      name={xHandle}
      url={`https://twitter.com/${xHandle}`}
    />
    <ResumeFooterLink
      icon={<LinkedinIcon />}
      name={linkedInHandle}
      url={`https://www.linkedin.com/in/${linkedInHandle}`}
    />
    <ResumeFooterLink
      icon={<GitHubIcon />}
      name={githubHandle}
      url={`https://github.com/${githubHandle}`}
    />
    <ResumeFooterLink
      icon={<TelegramIcon />}
      name={telegramHandle}
      url={`https://t.me/${telegramHandle}`}
    />
  </HStack>
)
