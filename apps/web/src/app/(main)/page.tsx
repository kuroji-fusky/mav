import { Button } from "@myartverse/ui/src/buttons"
import { InputField, Textarea } from "@myartverse/ui/src/fields"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-y-5 p-24">
      <Button prefix={<div>Prefix</div>} suffix={<div>Suffix</div>}>
        Button
      </Button>
      <form action="POST">
        <InputField />
        <InputField inputName="Name" placeholder="@kim_seokjin" required />
        <InputField inputName="Reason for unban?" required />
        <InputField inputName="Your character url" prefix="character/" />
        <InputField inputName="Prefix/suffix example" prefix="prefix" suffix="suffix" />
      </form>
      <Textarea inputName="Your feedback" />
    </main>
  )
}
