export const resetRedux = (): any => async (dispatch: any) => {
    try {
        localStorage.removeItem("persist:goldlabel")
        setTimeout(() => {
          // window.location.reload()
          window.open("/", "_self")
        }, 100)
    } catch (error: any) {
      console.log("Action error: resetRedux", error)
    }
  }
