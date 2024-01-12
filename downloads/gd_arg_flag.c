#include <stdio.h>
#include <gd.h>
#include <math.h>

void draw_argentina_flag(gdImagePtr img);

int main() {
    int width = 1200;
    int height = (int)(width * 3.0 / 5.0);

    gdImagePtr img = gdImageCreateTrueColor(width, height);
    gdImageAlphaBlending(img, 0);

    draw_argentina_flag(img);

    FILE *outputFile = fopen("./../images/argentina_flag_in_gd.png", "wb");
    if (outputFile == NULL) {
        fprintf(stderr, "Error opening the output file.\n");
        return 1;
    }
    gdImagePngEx(img, outputFile, 9);
    fclose(outputFile);
    gdImageDestroy(img);

    return 0;
}

void draw_argentina_flag(gdImagePtr img) {
    int width = gdImageSX(img);
    int height = gdImageSY(img);
    int lightBlue, white, yellow;

    lightBlue = gdImageColorAllocate(img, 0, 120, 191); // 淺藍色
    white = gdImageColorAllocate(img, 255, 255, 255); // 白色
    yellow = gdImageColorAllocate(img, 252, 209, 22); // 黃色

    // 繪製淺藍色背景
    gdImageFilledRectangle(img, 0, 0, width, height, lightBlue);

    // 繪製白色橫條
    int stripe_height = height / 3;
    gdImageFilledRectangle(img, 0, height / 3, width, height / 3 * 2, white);

    // 繪製太陽的臉
    int sun_radius = height / 6;
    int sun_center_x = width / 2;
    int sun_center_y = height / 2;
    gdImageFilledEllipse(img, sun_center_x, sun_center_y, sun_radius * 2, sun_radius * 2, yellow);

    // 繪製太陽的眼睛
    int eye_radius = sun_radius / 4;
    int eye_distance = sun_radius / 2;
    gdImageFilledEllipse(img, sun_center_x - eye_distance, sun_center_y, eye_radius * 2, eye_radius * 2, white);
    gdImageFilledEllipse(img, sun_center_x + eye_distance, sun_center_y, eye_radius * 2, eye_radius * 2, white);

    // 繪製太陽的嘴巴
    int mouth_radius = sun_radius / 2;
    int mouth_start_angle = 0;
    int mouth_end_angle = 180;
    gdImageArc(img, sun_center_x, sun_center_y + mouth_radius / 2, sun_radius * 2, mouth_radius * 2, mouth_start_angle, mouth_end_angle, white);

    // 繪製太陽的弧線
    int arc_radius = sun_radius * 1.2;
    int arc_start_angle = 180;
    int arc_end_angle = 360;
    gdImageArc(img, sun_center_x, sun_center_y, arc_radius * 2, arc_radius * 2, arc_start_angle, arc_end_angle, white);
}