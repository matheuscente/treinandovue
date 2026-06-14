import type { SearchForAddress } from "@/shared/types/types"

export type SearchData =
    | {
          searchType: "C"
          data: string
      }
    | {
          searchType: "E"
          data: SearchForAddress
      }