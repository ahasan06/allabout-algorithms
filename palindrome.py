num = int(input("Enter an integer: "))
num_str = str(num)

left =0
right =len(num_str)-1

is_pal = True

while left<right:
  if num_str[left]!=num_str[right]:
    is_pal = False
    break
  left+=1
  right-=1

if is_pal:
    print(f"{num} is a palindrome.")
else:
    print(f"{num} is not a palindrome.")