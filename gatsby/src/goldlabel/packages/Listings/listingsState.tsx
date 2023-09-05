export type ListingsShape = {
    strFilter: string
    maxResults: number
}

export const listingsState: ListingsShape = {
    maxResults: 10,
    strFilter: "Automatic",
}