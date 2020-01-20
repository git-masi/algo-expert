# Write a function that accepts two arguments: an array (list) of numbers and a target sum
# If any two numbers in the array add up to the target sum return them in an array
# Otherwise return an empty array
# Assume the array is an array of integers
# Assume that at most there will be two numbers that add up to the target sum


# ================
# Initial thoughts
# ================
# Nested for loops would get the job done but that would take O(n^2) time
# It would be possible to use two pointers to iterate over the list in O(n log(n)) time
#
# The better solution would be to generate a dict of "seen" elements and a number that would add up to the target
# Time complexity for this solution would be O(n) because we'd only go through each element once


# define function two_number_sum that accepts a list and a sum
#   seen = {}
#   loop over the list
#       if num not in seen
#           key = sum - num, value = True
#       if num in seen
#           return [seen[num], num]
#
#   return []


def two_number_sum(num_list, target_sum):
    seen = {}
    for num in num_list:
        difference = target_sum - num
        if seen.get(str(difference)):
            return [difference, num]
        else:
            seen[str(num)] = True
    return []


x = two_number_sum([1,2,3,6], 5)
print(x)