import { Button } from "@mav/ui/components/buttons"
import { Form, InputField, Textarea } from "@mav/ui/components/fields"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-y-5 p-24">
      <Button prefix={<div>Prefix</div>} suffix={<div>Suffix</div>}>
        Button
      </Button>
      <Form>
        <InputField />
        <InputField inputName="Name" placeholder="@kim_seokjin" required />
        <InputField prefix="character/" />
        <InputField inputName="Prefix/suffix example" prefix="prefix" suffix="suffix" />
      </Form>
      <Textarea inputName="Your feedback" />
    </main>
  )
}
