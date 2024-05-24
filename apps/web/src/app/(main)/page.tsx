import { Badge } from "@mav/ui/components/badges"
import { Button } from "@mav/ui/components/buttons"
import { Form, InputField, Textarea } from "@mav/ui/components/fields"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-y-5 p-24">
      <div className="flex items-center gap-x-2">
        <Badge size="small">small</Badge>
        <Badge size="medium">medium</Badge>
        <Badge size="big">big</Badge>
      </div>
      <div className="flex items-center gap-x-2">
        <Badge variant="primary">primary</Badge>
        <Badge variant="primary">123</Badge>
        <Badge variant="secondary">secondary</Badge>
        <Badge variant="secondary">123</Badge>
        <Badge variant="alert">alert</Badge>
        <Badge variant="info">info</Badge>
        <Badge variant="success">success</Badge>
        <Badge variant="warning">warning</Badge>
      </div>
      <Form>
        <InputField />
        <InputField inputName="Name" placeholder="@kim_seokjin" required />
        <InputField inputName="Character URL" prefix="character/" />
        <InputField inputName="Prefix/suffix example" prefix="prefix" suffix="suffix" />
        <Textarea inputName="Your feedback" />
      </Form>
      <div className="flex items-center gap-x-2">
        <Button variant="primary" size="small">
          Small
        </Button>
        <Button variant="primary" size="big">
          Big
        </Button>
        <Button variant="secondary" size="small">
          Small Secondary
        </Button>
        <Button variant="tritery" size="small">
          Small Tritery
        </Button>
      </div>
      <div className="flex gap-x-2">
        <Button prefix={<div>Prefix</div>} suffix={<div>Suffix</div>}>
          Button
        </Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="tritery">Tritery</Button>
        <Button variant="primary" disabled>
          Disabled Primary
        </Button>
        <Button variant="secondary" disabled>
          Disabled Secondary
        </Button>
        <Button variant="tritery" disabled>
          Disabled Tritery
        </Button>
      </div>
      <div className="flex items-center gap-x-2">
        <Button variant="alert">Alert</Button>
        <Button variant="alert-secondary">Alert Secondary</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="warning-secondary">Warning Secondary</Button>
      </div>
      <div className="flex items-center gap-x-2">
        <Button size="small" variant="alert">
          Small Alert
        </Button>
        <Button size="small" variant="alert-secondary">
          Small Alert Secondary
        </Button>
        <Button size="small" variant="warning">
          Small Warning
        </Button>
        <Button size="small" variant="warning-secondary">
          Small Warning Secondary
        </Button>
      </div>
    </main>
  )
}
