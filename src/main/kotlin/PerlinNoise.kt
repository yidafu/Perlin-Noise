package dev.yidafu.perlin

import kotlin.math.floor

class PerlinNoise {
    fun noise(x: Double, y: Double): Double {
        val X = floor(x).toInt() and 255 // 等价于取余 256
        val Y =  floor(y).toInt() and 255 // 等价于取余 256

        // decimal place
        val X_f = x - floor(x)
        val Y_f = y - floor(y)

        val topRight = Vector2(X_f - 1.0, Y_f - 1.0)
        val topLeft =  Vector2(X_f, Y_f - 1.0)
        val bottomRight = Vector2(X_f - 1.0, Y_f)
        val bottomLeft = Vector2(X_f, Y_f)

        val valueTopRight = P[P[X + 1] + Y + 1]
        val valueTopLeft = P[P[X] + Y + 1]
        val valueBottomRight = P[P[X + 1] + Y]
        val valueBottomLeft = P[P[X] + Y]

        val dotTopRight = topRight * getConstantVector(valueTopRight)
        val dotTopLeft = topLeft * getConstantVector(valueTopLeft)
        val dotBottomRight = bottomRight * getConstantVector(valueBottomRight)
        val dotBottomLeft = bottomLeft * getConstantVector(valueBottomLeft)

        val u = fade(X_f)
        val v = fade(Y_f)
        return lerp(
            u,
            lerp(v, dotBottomLeft, dotTopLeft),
            lerp(v, dotBottomRight, dotTopRight)
        )
    }

    companion object {
        val P: List<Int> by lazy {
            val list = createPermutationTable()

            list + list
        }
    }
}