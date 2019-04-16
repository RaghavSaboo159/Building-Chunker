from main import app
import unittest


class FlaskTestCase(unittest.TestCase):

    # Ensure that Flask was set up correctly
    def test_index(self):
        tester = app.test_client(self)
        response = tester.get('/', content_type='html/text')
        self.assertEqual(response.status_code, 200)

    def test_experiment(self):
        tester = app.test_client(self)
        response = tester.get('/Experiment', content_type='html/text')
        self.assertEqual(response.status_code, 200)

    def test_chunker(self):
        tester = app.test_client(self)
        response = tester.get('/Building-Chunker', content_type='html/text')
        self.assertEqual(response.status_code, 200)

    def test_forum(self):
        tester = app.test_client(self)
        response = tester.get('/Forum', content_type='html/text')
        self.assertEqual(response.status_code, 200)

    def test_New(self):
        tester = app.test_client(self)
        response = tester.get('/New', content_type='html/text')
        self.assertEqual(response.status_code, 200)

if __name__ == '__main__':
    unittest.main()