import cn from "@/utils/cn"

export default function ColorPalette({
  palette,
  width = "100%",
  height = "30px"
}: {
  palette: string[]
  width?: number | string
  height?: number | string
}) {
  return (
    <div
      className={"border-400 flex  flex-row rounded border-2 border-solid"}
      style={{ width, height }}
    >
      {palette
        ? palette
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
            )
        : null}
    </div>
  )
}
