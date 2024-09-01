package dev.yidafu.perlin

data class Vector2(val x: Double, val y: Double) {
    operator fun times(other: Vector2): Double {
        return this.x * other.x + this.y * other.y;
    }
}