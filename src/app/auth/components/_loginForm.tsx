import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6 p-4", className)} {...props}>
      <div className="text-center my-5">
        <h3 className="font-bold text-2xl uppercase text-primary">sign in</h3>
        <p className="text-gray-400">Enter your detail bellow.</p>
      </div>
      <form>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </Field>
          <Field>
            <div className="flex items-center">
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <a
                href="#"
                className="ml-auto text-sm underline-offset-4 hover:underline text-gray-400"
              >
                Forgot your password?
              </a>
            </div>
            <Input id="password" type="password" required />
          </Field>
          <Field>
            <Button type="submit" size="lg" className="text-white font-bold">LOGIN</Button>
            <FieldDescription className="text-center !mt-4">
              Don&apos;t have an account? <a href="#">Sign up</a>
            </FieldDescription>
          </Field>
        </FieldGroup>
      </form>
      <FieldDescription className="px-6 text-center !mt-46">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </FieldDescription>
    </div>
  )
}
