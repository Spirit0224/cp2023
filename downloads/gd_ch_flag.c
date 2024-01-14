#include <stdio.h>
#include <gd.h>

void draw_switzerland_flag(gdImagePtr img);

int main() {
    // 瑞士國旗的比例為 1:1
    int size = 600;

    gdImagePtr img = gdImageCreateTrueColor(size, size);
    gdImageAlphaBlending(img, 0);

    draw_switzerland_flag(img);

    FILE *outputFile = fopen("./../images/switzerland_flag_in_gd.png", "wb");
    if (outputFile == NULL) {
        fprintf(stderr, "Error opening the output file.\n");
        return 1;
    }
    gdImagePngEx(img, outputFile, 9);
    fclose(outputFile);
    gdImageDestroy(img);
    return 0;
}

void draw_switzerland_flag(gdImagePtr img) {
    int size = gdImageSX(img);
    int white, red;

    // 瑞士國旗的紅、白兩種顏色
    white = gdImageColorAllocate(img, 255, 255, 255); // 白色
    red = gdImageColorAllocate(img, 206, 17, 38); // 紅色

    // 先填滿整個畫布為白色
    gdImageFilledRectangle(img, 0, 0, size, size, white);

    // 繪製紅色十字
    int cross_width = size / 5;
    int cross_arm_width = size / 25;

    // 繪製水平橫臂
    gdImageFilledRectangle(img, 0, (size - cross_arm_width) / 2, size, (size + cross_arm_width) / 2, red);

    // 繪製垂直直臂
    gdImageFilledRectangle(img, (size - cross_arm_width) / 2, 0, (size + cross_arm_width) / 2, size, red);
}