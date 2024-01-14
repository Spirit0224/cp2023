#include <stdio.h>
#include <gd.h>

void draw_belgium_flag(gdImagePtr img);

int main() {
    // 比利時國旗的比例為 13:15
    int width = 780;
    int height = (int)(width * 15.0 / 13.0);

    gdImagePtr img = gdImageCreateTrueColor(width, height);
    gdImageAlphaBlending(img, 0);

    draw_belgium_flag(img);

    FILE *outputFile = fopen("./../images/belgium_flag_in_gd.png", "wb");
    if (outputFile == NULL) {
        fprintf(stderr, "Error opening the output file.\n");
        return 1;
    }
    gdImagePngEx(img, outputFile, 9);
    fclose(outputFile);
    gdImageDestroy(img);
    return 0;
}

void draw_belgium_flag(gdImagePtr img) {
    int width = gdImageSX(img);
    int height = gdImageSY(img);
    int black, yellow, red;

    // 比利時國旗的三種顏色
    black = gdImageColorAllocate(img, 0, 0, 0);      // 黑色
    yellow = gdImageColorAllocate(img, 255, 223, 0);  // 黃色
    red = gdImageColorAllocate(img, 206, 17, 38);     // 紅色

    // 根據比例繪製三個垂直條紋
    int stripe_width = width / 3;
    gdImageFilledRectangle(img, 0, 0, stripe_width, height, black);
    gdImageFilledRectangle(img, stripe_width, 0, stripe_width * 2, height, yellow);
    gdImageFilledRectangle(img, stripe_width * 2, 0, width, height, red);
}