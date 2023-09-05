import { 
  notify,
  setPwaKey,
  store,
} from "../../../../"

export const updateFilter =
  (
    key: string,
    value: any,
  ): any =>

  async (dispatch: any) => {
    try {
      const {sihab} = store.getState()
      dispatch(setPwaKey({ key: "sihab", value: {
        ...sihab, 
        [key]: value,
      }}))
      // if (value) dispatch(notify("success", `FILTER ${value}`))
    } catch (error: any) {
      dispatch(notify("warning", error))
    }
}