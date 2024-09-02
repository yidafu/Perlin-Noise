package dev.yidafu.perlin

import kotlinx.browser.document
import org.w3c.dom.CanvasRenderingContext2D
import org.w3c.dom.HTMLCanvasElement
import org.w3c.dom.HTMLInputElement
import kotlin.math.floor


val perlin = PerlinNoise()

fun generateTerrain(size: Int, ctx: CanvasRenderingContext2D) {
    ctx.clearRect(0.0, 0.0, 500.0, 500.0)

    for (y in 0 until size step 1) {
        for (x in 0 until size step 1) {

            var n = 0.0
            var a = 1.0
            var f = 0.005
            for (o in 0..8) {
                val v = a * perlin.noise(x * f, y * f)
                n += v

                a *= 0.5
                f *= 2.0
            }

            n += 1.0
            n *= 0.5
            val value = (floor(255 * n))

            val color = if (value < 128) {
                "rgb(0,0,$value)"
            } else if (value < 230) {
                "rgb(0, $value,${value/ 2})"
            } else {
                "rgb($value,$value,$value)"
            }
            ctx.fillStyle = color
            ctx.fillRect(x.toDouble(), y.toDouble(), 1.0, 1.0)
        }
    }
}
fun main() {

    val canvas = document.getElementById("canvas") as HTMLCanvasElement
    val ctx = canvas.getContext("2d")  as CanvasRenderingContext2D

    var imageSize = 500;
    generateTerrain(imageSize, ctx)
    val range = document.getElementById("imageSize") as HTMLInputElement
    range.onchange = {evt ->
        val i = (evt.target as HTMLInputElement)
        val size: Int = i.value.toInt(10)
        imageSize = size;
        generateTerrain(size, ctx)
    }

    val resetBtn = document.getElementById("resetSeed") as HTMLInputElement
    resetBtn.onclick = {
        perlin.resetP()
        generateTerrain(imageSize, ctx)
    }

    val defaultBtn = document.getElementById("defaultSeed") as HTMLInputElement
    defaultBtn.onclick = {
        perlin.defaultP()
        generateTerrain(imageSize, ctx)
    }
}