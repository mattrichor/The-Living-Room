import React from 'react'
import { createRef } from 'react'

const FamilyTree = () => {
  let canvas = React.useRef()
  const ctx = canvas.getRef('2d')

  const drawTree = (
    startX,
    startY,
    length,
    angle,
    branchWidth,
    color1,
    color2
  ) => {
    ctx.beginPath()
    ctx.save()
    ctx.strokeStyle = color1
    ctx.strokeStyle = color2
    ctx.lineWidth = branchWidth
    ctx.translate(startX, startY)
    ctx.rotate((angle * Math.PI) / 180)
    ctx.moveTo(0.0)
    ctx.lineTo(0, -length)
    ctx.stroke()

    if (length < 10) {
      ctx.restore()
      return
    }
    drawTree(0, -length, length * 0.75, angle + 20, branchWidth)
    drawTree(0, -length, length * 0.75, angle - 20, branchWidth)

    ctx.restore()
  }
  drawTree(canvas.width / 2, canvas.height - 80, 120, 0, 2, 'brown', 'green')
  return (
    <div className="canvas">
      <button className="tree-gen-button"></button>
    </div>
  )
}

export default FamilyTree
