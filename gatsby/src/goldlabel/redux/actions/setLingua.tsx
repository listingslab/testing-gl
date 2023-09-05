import { 
  setPwaKey,
  navigate,
} from "../../../"

export const setLingua =
  (value: string): any =>
  async (dispatch: any) => {
    try {

      dispatch(setPwaKey({ key: "locale", value}))
      // dispatch(navigate("/", "_self"))

    } catch (error: any) {
      console.log("Action error: setLingua", error)
    }
}
