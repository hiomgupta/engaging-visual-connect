import * as React from "react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/Button"

interface PaginationProps extends React.HTMLAttributes<HTMLDivElement> {
  pageCount: number
  currentPage: number
  onPageChange: (page: number) => void
}

export const Pagination = ({
  pageCount,
  currentPage,
  onPageChange,
  className,
  ...props
}: PaginationProps) => {
  const [pages] = React.useState(Array.from({ length: pageCount }, (_, i) => i + 1))

  const canPreviousPage = currentPage > 1
  const canNextPage = currentPage < pageCount

  const onPreviousPage = () => {
    if (canPreviousPage) {
      onPageChange(currentPage - 1)
    }
  }

  const onNextPage = () => {
    if (canNextPage) {
      onPageChange(currentPage + 1)
    }
  }

  return (
    <div
      className={cn("flex w-full items-center justify-between", className)}
      {...props}
    >
      <div className="flex-1 text-sm text-muted-foreground">
        {currentPage} of {pageCount}
      </div>
      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          className="hidden h-8 w-8 p-0 lg:flex"
          onClick={onPreviousPage}
          disabled={!canPreviousPage}
        >
          <span className="sr-only">Go to previous page</span>
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          className="hidden h-8 w-8 p-0 lg:flex"
          onClick={onNextPage}
          disabled={!canNextPage}
        >
          <span className="sr-only">Go to next page</span>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
Pagination.displayName = "Pagination"
