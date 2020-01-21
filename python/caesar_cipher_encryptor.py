# Write a function that accepts a non-empty string of lowercase characters and a positive int
# The function should return a new string with the letters shifted the number of placed in the alphabet
# indicated by the int
# Letters should wrap so that for example z would wrap to a


# ================
# Initial thoughts
# ================
# One way to solve this woul be to create a lists/tring of characters a-z to use as a reference
# Loop through the characters in the string argument and push to a new list/string
# We basically just use some math and the % operator to determine the index of the reference string to push to the new list/string

# =========================
# Pseudocode before attempt
# =========================
# Write a function called caesar_cipher_encryptor that accepts a string and an int
#   reference = 'a...z'
#   encrypted = ''
#   for each char in string
#       add character in reference with index = (index of char in reference + num) % 25
#
#   return encrypted
#
# **could probably solve this with a list comprehension and join as well


def caesar_cipher_encryptor(string, key):
    reference = 'abcdefghijklmnopqrstuvwxyz'
    encrypted = ''

    for char in string:
        encrypted += reference[(reference.index(char) + key) % 26]

    return encrypted

# testString = 'abc'
# testString = 'xyz'
# x = caesar_cipher_encryptor(testString, 2)
# print(x)


# =========================
# Post implementation notes
# =========================
# This time complexity for the index() method is O(n), the array is traversed to find the index
# This is not random/direct access which would have O(1) time complexity
# So it takes O(n) time to traverse the string argument and O(m) time to traverse the reference string
#
# Another possible implementation of this would be to use unicode/ascii character numbers as well
#
# A further consideration would be if the "key" is particularly large (i.e. greater than 26)
# We could use the % operator on the key as well in order to account for this