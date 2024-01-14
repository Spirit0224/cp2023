#include <stdio.h>
#include <gd.h>
#include <math.h>

void draw_luxembourg_flag(gdImagePtr img);

int main() {
    int width = 1200;
    int height = (int)(width * 2.0 / 3.0);

    gdImagePtr img = gdImageCreateTrueColor(width, height);
    gdImageAlphaBlending(img, 0);

    draw_luxembourg_flag(img);

    FILE *outputFile = fopen("./../images/luxembourg_flag_in_gd.png", "wb");
    if (outputFile == NULL) {
        fprintf(stderr, "Error opening the output file.\n");
        return 1;
    }
    gdImagePngEx(img, outputFile, 9);
    fclose(outputFile);
    gdImageDestroy(img);

    return 0;
}

void draw_luxembourg_flag(gdImagePtr img) {
    int width = gdImageSX(img);
    int height = gdImageSY(img);
    int red, white, lightBlue;

    red = gdImageColorAllocate(img, 208, 16, 76); // 紅色
    white = gdImageColorAllocate(img, 255, 255, 255); // 白色
    lightBlue = gdImageColorAllocate(img, 0, 49, 120); // 海藍色

    // 上方紅色條紋
    gdImageFilledRectangle(img, 0, 0, width, height / 3, red);

    // 中間白色條紋
    gdImageFilledRectangle(img, 0, height / 3, width, height / 3 * 2, white);

    // 下方海藍色條紋
    gdImageFilledRectangle(img, 0, height / 3 * 2, width, height, lightBlue);
}