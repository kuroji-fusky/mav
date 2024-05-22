import { Button } from "@myartverse/ui"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button prefix={<div>Prefix</div>} suffix={<div>Suffix</div>}>
        Button
      </Button>
    </main>
  )
}
