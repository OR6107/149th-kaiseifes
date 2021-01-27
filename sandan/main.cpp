#include <iostream>
#include <vector>

using namespace std;
struct sandan {
    string place;
    string name;
    string description;
};

int main() {
    vector<sandan> sandanList;
    while (true) {
        string s;
        getline(cin, s);
        if (s.empty())break;

        sandan san;
        {
            int x = 0;
            string now;
            for (auto &c:s) {
                if (c == ',') {
                    if (x == 0)san.place = now, now.clear();
                    else if (x == 1)san.name = now, now.clear();
                    else if (x == 2)san.description = now, now.clear();
                    else break;
                    x++;
                } else {
                    now.push_back(c);
                }
            }
        }

        sandanList.push_back(san);
    }

    for (int i = 0; i < sandanList.size(); i++) {
        cout << "{" << endl;
        cout << "id: " << i + 1 << "," << endl;
        cout << "name: '" << sandanList[i].name << "'," << endl;
        cout << "place: '" << sandanList[i].place << "'," << endl;
        cout << "type: " << 31 << "," << endl;
        cout << "description: '" << sandanList[i].description << "'," << endl;
        cout << "}," << endl;
    }
    return 0;
}
