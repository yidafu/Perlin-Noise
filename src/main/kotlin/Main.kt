package dev.yidafu.perlin

import java.awt.Color
import java.awt.image.BufferedImage
import java.io.File
import javax.imageio.ImageIO
import kotlin.math.abs

fun main() {

    val height = 500
    val width = 500
    val perlin = PerlinNoise()

    val imageV2 = BufferedImage(width, height, BufferedImage.TYPE_INT_ARGB)
    for (y in 0 until height) {
        for (x in 0 until width) {
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
            val value = abs(Math.round(255 * n))

            val color = if (n < 0.5) {
                Color(0, 0,  (value).toInt(), 0xFF)
            } else if (n < 0.9) {
                Color(0, value.toInt(),  Math.round(value * 0.5).toInt(), 0xFF)
            } else {
                Color(value.toInt(), value.toInt(), value.toInt(), 0xFF)
            }
            // 设置像素的颜色
            imageV2.setRGB(x, y,color.rgb)
        }
    }
    ImageIO.write(imageV2, "png", File("output.png"))
}
