import { ButtonVariants } from "@/components/common/Button"
import { VariantProps } from "class-variance-authority"
import { ComponentProps } from "react"

export interface NavLinkProps {
  path: string
  title: string
}

export interface CardProps extends ComponentProps<"div"> {
  title: string
  content: string
}

export interface SpanWithLabelCardProps {
  id: string
  title: string
  content: string
}

export interface AddressProps {
  street: string
  suite: string
  city: string
  zipCode: string
  geo: {
    lat: string
    lng: string
  }
}


export interface UserProps {
  id: number
  name: string
  email: string
  address: AddressProps
}

export interface PostProps extends ComponentProps<"div"> {
  title: string
  content: string
  userId: number
}

export interface PostModalProps {
  onSubmit: (cardDetails: CardProps) => void
  onClose: () => void
}

export interface CloseButtonProps extends ComponentProps<"button"> {
  onClose: () => void
}

export type ButtonSizeProps = NonNullable<VariantProps<typeof ButtonVariants>["size"]>
export type ButtonVariantProps = NonNullable<VariantProps<typeof ButtonVariants>["variant"]>


export interface ButtonProps extends ComponentProps<"button"> {
  size?: ButtonSizeProps
  variant?: ButtonVariantProps
  shape: "rounded-sm" | "rounded-md" | "rounded-full"
}