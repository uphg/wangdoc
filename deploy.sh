#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
echo -e "\n# commit build"
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master
echo -e "\n# push Github"
git push -f git@github.com:uphg/wangdoc.git master:gh-pages
echo -e "\n# push Gitee"
git push -f git@gitee.com:uphg/wangdoc.git master:gh-pages
echo -e "\n# Exit the build folder"
cd -