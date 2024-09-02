import org.jetbrains.kotlin.gradle.dsl.KotlinJsCompile

plugins {
    kotlin("multiplatform") version "2.0.20"
}

group = "dev.yidafu.perlin"
version = "1.0-SNAPSHOT"

repositories {
    mavenCentral()
}

dependencies {
//    testImplementation(kotlin("test"))
}

kotlin {
    js {
        browser {
        }
        binaries.executable()
    }

    sourceSets {
        commonTest.dependencies {
            implementation(kotlin("test")) // Brings all the platform dependencies automatically
        }

        val jsMain by getting {
            dependencies {
            }
        }
    }

    jvm {
    }
}

rootProject.plugins.withType<org.jetbrains.kotlin.gradle.targets.js.nodejs.NodeJsRootPlugin> {
    rootProject.the<org.jetbrains.kotlin.gradle.targets.js.nodejs.NodeJsRootExtension>().download = false
    // "true" for default behavior
}

tasks.withType<KotlinJsCompile>().configureEach {
    kotlinOptions {
        target = "es2015"
    }
}