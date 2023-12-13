#include <stdio.h>
#include <gd.h>
#include <math.h>

void draw_japan_flag(gdImagePtr img);
void draw_red_sun(gdImagePtr img, int x, int y, int size, int color);

int main() {
    int height = 10; // 国旗的高度
    int width = 20; // 国旗的宽度

    // 循环打印国旗
    for (int i = 0; i < height; i++) {
        for (int j = 0; j < width; j++) {
            if (i < height / 2) {
                // 上半部分，红白红条纹
                if (j % 2 == 0) {
                    printf("\033[0;31m*\033[0m"); // 使用*代表红色
                } else {
                    printf("\033[0;37m*\033[0m"); // 使用*代表白色
                }
            } else {
                // 下半部分，白蓝白条纹
                if (j % 2 == 0) {
                    printf("\033[0;37m*\033[0m"); // 使用*代表白色
                } else {
                    printf("\033[0;34m*\033[0m"); // 使用*代表蓝色
                }
            }
        }
        printf("\n"); // 换行
    }

    return 0;
}