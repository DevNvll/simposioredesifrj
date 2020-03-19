import ethernet from "../assets/img/undraw/infrastructure.svg"
import iot from "../assets/img/undraw/iot.svg"
import handshake from "../assets/img/undraw/handshake.svg"
import cx from "classnames"

function getImage(image) {
  switch (image) {
    case "ethernet":
      return ethernet
    case "iot":
      return iot
    case "handshake":
      return handshake
    default:
      return iot
  }
}

export function Topic({
  image,
  title,
  description,
  reversed = false,
  ...props
}) {
  const margin = reversed ? "ml-40" : "mr-40"
  const img = getImage(image)
  return (
    <div
      className={cx("flex justify-center items-center pb-20 pt-20", {
        ["bg-gray-900"]: reversed
      })}
    >
      <div
        className={cx("container flex justify-between items-start", {
          ["flex-row-reverse"]: reversed
        })}
      >
        <img
          className={margin}
          src={img}
          alt="Topic Icon"
          style={{ width: "400px" }}
        />
        <div className="flex justify-between items-start flex-col">
          <h1
            className={cx("font-bold text-4xl", {
              ["text-primary-600"]: !reversed,
              ["text-gray-300"]: reversed
            })}
          >
            {title}
          </h1>
          <p
            className={cx("mt-8  font-400 text-xl leading-loose", {
              ["text-gray-900"]: !reversed,
              ["text-gray-300"]: reversed
            })}
          >
            {description}
          </p>
          <button
            className={cx(
              "mt-8 border-solid border px-10 py-6 rounded-md text-xl ",
              {
                ["border-secondary-400 text-secondary-400 hover:bg-secondary-400 hover:text-white"]: !reversed,
                ["border-gray-300 text-gray-300 hover:bg-primary-400 hover:border-primary-400"]: reversed
              }
            )}
          >
            Saiba Mais
          </button>
        </div>
      </div>
    </div>
  )
}
