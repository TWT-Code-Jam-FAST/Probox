const JSCODE =
  `
// This is the Node JS template

function greet(name) {
    console.log(\`Hello, \${name}!\`);
}
greet("world");
`.trim() + "\n";

const PYCODE =
  `
# This is the Python template

def greet(name):
    print(f"Hello, {name}!")

greet("world")
`.trim() + "\n";

const CPPCODE =
  `
// This is the C++ template

#include <iostream>

void greet(std::string name) {
    std::cout << "Hello, " << name << "!";
}

int main() {
    greet("world");
    return 0;
}
`.trim() + "\n";

const RBCODE =
  `
# This is the Ruby template

def greet(name)
    puts "Hello, #{name}!"
end

greet('world')
`.trim() + "\n";

const LUACODE =
  `
-- This is the Lua template

function greet(name)
    print("Hello, " .. name .. "!")
end

greet("world")
`.trim() + "\n";
