import cn from "@/utils/cn"

export default function ColorPalette({
  palette
}: {
  palette: string[]
  width?: number | string
  height?: number | string
}) {
  return (
    <div
      className={"border-400 flex h-full w-full flex-row rounded border-2 border-solid"}
    >
      {palette
        .filter((e) => e.startsWith("#"))
        .map(
          (color, i) =>
            color && (
              <div
                style={{ backgroundColor: color }}
                className={cn(
                  "h-full w-full",
                  i === 0 && "rounded-l",
                  i === palette.length - 1 && "rounded-r"
                )}
                key={i}
              />
            )
        )}
    </div>
  )
}
