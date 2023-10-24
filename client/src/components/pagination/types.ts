export interface PaginationTypes {
    currentPage: number,
    totalPage: number,
    changePage: (val: number) => void
}
