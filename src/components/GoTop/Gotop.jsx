"use client"
import React, { useState, useEffect } from "react"
import { GoMoveToTop } from "react-icons/go";

const GoTop = () => {
  const [showScroll, setShowScroll] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop)
    return function cleanup() {
      window.removeEventListener("scroll", checkScrollTop)
    }
  })

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 100) {
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 100) {
      setShowScroll(false)
    }
  }

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      <div
        className="go-top"
        onClick={scrollTop}
        style={{
          display: showScroll ? "block" : "none",
        }}
        aria-hidden="true"
      >
        <GoMoveToTop/>
      </div>
    </>
  )
}

export default GoTop
