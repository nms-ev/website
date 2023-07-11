import { env as priv } from '$env/dynamic/private'
import { createTransport } from 'nodemailer'
import type { ComponentProps, ComponentType, SvelteComponent } from 'svelte'
import { render } from 'svelte-email'
import LoginMail from './templates/loginMail.svelte'
import VerifyMail from './templates/verifyMail.svelte'

const transport = createTransport({
  host: priv.MAIL_HOST,
  port: 465,
  secure: true,
  auth: {
    user: priv.MAIL_USER,
    pass: priv.MAIL_PASS,
  },
})

async function sendTemplate<Component extends SvelteComponent>(
  to: string,
  subject: string,
  template: ComponentType<Component>,
  props: ComponentProps<Component>
) {
  const html = render({ template, props })
  const text = render({ template, props, options: { plainText: true } })

  await transport.sendMail({
    from: `NMS <${priv.MAIL_USER}>`,
    to,
    subject,
    text,
    html,
  })
}

export function sendApprovalMail(to: string, props: ComponentProps<VerifyMail>) {
  return sendTemplate(to, 'NMS membership approved', VerifyMail, props)
}

export function sendVerifyMail(to: string, props: ComponentProps<VerifyMail>) {
  return sendTemplate(to, 'Verify your NMS registration', VerifyMail, props)
}

export function sendLoginMail(to: string, props: ComponentProps<LoginMail>) {
  return sendTemplate(to, 'Your NMS login', LoginMail, props)
}
