import { 
  notify,
  setPwaKey,
  store,
} from "../../../../"

export const navigateLocale =
  (
    seedId: string,
    locale: string,
  ): any =>

  async (dispatch: any) => {
    try {
        dispatch(notify("info", `${seedId} | locale ${locale}`))
        //   const {sihab} = store.getState()
        //   dispatch(setPwaKey({ key: "sihab", value: {
        //     ...sihab, 
        //     [key]: value,
        //   }}))
        //   if (value) dispatch(notify("success", `FILTER ${value}`))
    } catch (error: any) {
      dispatch(notify("error", error))
    }
}