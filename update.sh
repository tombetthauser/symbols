all_files=(./*)
sub_directories=[]

# Add beginning of js file...

echo "const directories = [" > app.js

for ((i=0; i<${#all_files[@]}; i++)); do
    #do something to each element of array
  # if [[ "${all_files[$i]}" == *"sh"* ]];then
  if ! [[ "${all_files[$i]}" == *"app.js"* || "${all_files[$i]}" == *"index.html"*  || "${all_files[$i]}" == *"update.sh"* ]];then
    # echo "'" >> app.js
    echo "'${all_files[$i]}/index.html'," >> app.js
    # echo "'," >> app.js
  fi
done

echo "];" >> app.js
echo "window.location.href = directories[Math.floor(Math.random() * directories.length)];" >> app.js

# for file in *.out;do
#     printf '%s\n' "$file"
# done
