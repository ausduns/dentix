with open('css/styles.css', 'a') as f:
    f.write('''
.team-carousel {
  display: flex;
  gap: 24px;
  overflow-x: auto;
  padding: 0 5%;
  margin: 0 auto;
  max-width: 1400px;
  scrollbar-width: none;
}
.team-carousel::-webkit-scrollbar {
  display: none;
}
.team-carousel .team-card {
  flex: 0 0 300px;
}
''')
print("Appended")
