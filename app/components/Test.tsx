"use client"

import { CircleUser } from "lucide-react"

export default function Test() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">

      <div className="group relative w-[300px] h-[200px]">

        {/* Slide 1 */}
        <div className="absolute top-0 left-0 w-full h-full bg-blue-600 flex items-center justify-center
        translate-y-[100px] group-hover:translate-y-0 transition-all duration-700">

          <CircleUser className="h-20 w-20 text-white" strokeWidth={1.75} />

        </div>

        {/* Slide 2 */}
        <div className="absolute top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center p-6
        -translate-y-[100px] group-hover:translate-y-0 transition-all duration-700 shadow-xl">

          <h3 className="text-xl font-semibold mb-2 text-gray-800">
            Hello there!
          </h3>

          <p className="text-gray-600 text-center">
            Trust yourself and keep going.
          </p>

        </div>

      </div>

    </div>
  )
}
