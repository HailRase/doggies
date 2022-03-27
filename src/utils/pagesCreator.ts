export const pagesCreator = (pages: number[], pagesCount: number, currentPage: number) => {
  if (pagesCount > 7){
        if (currentPage > 5){
            for (let i = currentPage - 4; i <= currentPage + 5; i++) {
                pages.push(i)
                if (i === pagesCount) break
            }
        }else{
            for (let i = 1; i <= 7; i++) {
                pages.push(i)
                if (i === pagesCount) break
            }
        }
  }else{
      for (let i = 1; i <= pagesCount; i++) {
          pages.push(i)
      }
  }
}